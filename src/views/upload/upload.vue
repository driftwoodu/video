<template>

  <div>
    <div id="upload" class="top_div"></div>
    <div style="background: rgb(255, 255, 255); margin: -100px auto auto; border: 1px solid rgb(231, 231, 231); border-image: none; width: 400px; height: 193px; text-align: center;">
      <div style="width: 165px; height: 96px; position: absolute;">
        <div class="tou"></div>
        <div class="initial_left_hand" id="left_hand"></div>
        <div class="initial_right_hand" id="right_hand"></div>
      </div>

      <h2>
        <p style="padding: 25px 0px 10px; position: relative;">
          <input class="ipt" type="file" @change="handleFileChange">
          </p>
      </h2>
      <p style="padding: 25px 0px 10px; position: relative;"> <input class="ipt" type='text'
          id="title" v-model="title" placeholder="请输入视频标题">
      </p>
      <span>{{
      allChunksUploaded ? "完成" : "上传进度：" + uploadProcess + "%"
    }}</span>
      <div style="background: rgb(255, 255, 255); height: 50px; line-height: 50px; margin-top: 20px;">
        <span style="float: none;">
          <a id="modifyBtn" @click="handleUpload">上传</a>
        </span></div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import Axios, {
    AxiosResponse
  } from "axios";
  import QS from "qs";
  import {
    randomId
  } from "../../util/IdUtils";
  import _ from "lodash";
  import {
    ChunkUploadResult,
    isChunkUploadResult,
  } from "../../dto/ChunkUploadResult";
  document.body.style.backgroundColor = "#ffffff";
  type FileChunks = {
    file: File;
    chunks: {
      start: number;end: number
    } [];
  };

  @Component
  export default class App extends Vue {
    container: {
      file: null | File
    } = {
      file: null
    };
    chunkSize = 10 * 1024 * 1024; // 文件块大小10M
    allChunksUploaded = false;
    uploadProcess = 0;
    handleFileChange(e: Event) {
      const files = (e.target!as any).files;
      if (!files || files.length === 0) return;
      this.container.file = files[0];
      // 将上传完成状态置否
      this.allChunksUploaded = false;
    }
    makeChunks(file: File): FileChunks {
      const fileChunks: FileChunks = {
        file,
        chunks: [],
      };
      if (file.size < this.chunkSize) {
        fileChunks.chunks.push({
          start: 0,
          end: file.size
        });
        return fileChunks;
      }
      let chunksLength;
      if (file.size % this.chunkSize === 0) {
        chunksLength = Math.round(Math.floor(file.size / this.chunkSize));
      } else {
        chunksLength = Math.round(Math.floor(file.size / this.chunkSize)) + 1;
      }
      let leftSize = file.size;
      while (leftSize > 0) {
        const start = fileChunks.chunks.length * this.chunkSize;
        const end =
          start + this.chunkSize >= file.size ?
          file.size :
          start + this.chunkSize;
        leftSize -= end - start;
        fileChunks.chunks.push({
          start,
          end
        });
      }
      return fileChunks;
    }

    handleUpload(e: any) {
      console.log(`file: ${JSON.stringify(this.container.file)}`);
      const fileChunks = this.makeChunks(this.container.file!);
      const allChunksUploadStatus = _.fill(
        new Array(fileChunks.chunks.length),
        false
      );
      // 重置上传进度的状态
      this.allChunksUploaded = false;
      this.uploadProcess = 0;
      // 计算上传进度
      const calUploadProcess = (): number => {
        let uploadedCount = 0;
        _.each(allChunksUploadStatus, (item) => {
          if (item) uploadedCount++;
        });
        return new Number(
          ((uploadedCount * 100) / allChunksUploadStatus.length).toFixed(0)
        ).valueOf();
      };
      // 生成uid，传递给后端，后端根据uid对子文件块进行合并
      console.log(title.value)
      const fileUid = randomId();
      fileChunks.chunks.forEach(
        (chunk: {
          start: number;end: number
        }, index: number) => {
          const formData = new FormData();
          formData.append("index", index + "");
          formData.append("chunk", fileChunks.file.slice(chunk.start, chunk.end));
          formData.append("name", fileChunks.file.name);
          formData.append("chunksLength", fileChunks.chunks.length + "");
          formData.append("uid", fileUid);
          formData.append("title", title.value);
          formData.append("author", sessionStorage.getItem('user'))
          formData.append("id", sessionStorage.getItem('id'))
          Axios.post < ChunkUploadResult > ('sys/api/fileupload', formData)
            .catch((reason) => console.error(`error: ${JSON.stringify(reason)}`))
            .then((res) => {
              if (typeof res === "object") {
                const data = res.data;
                if (isChunkUploadResult(data)) {
                  if (data.status) {
                    allChunksUploadStatus[index] = true;
                    // 更新上传百分比
                    this.uploadProcess = calUploadProcess();
                    // 更新上传状态
                    if (this.uploadProcess === 100) this.allChunksUploaded = true;
                  }
                }
              }
            });
        }
      );
    }
  }
</script>

<style scoped>
  body {
    background: #ebebeb;
    font-family: "Helvetica Neue", "Hiragino Sans GB", "Microsoft YaHei", "\9ED1\4F53", Arial, sans-serif;
    color: #222;
    font-size: 12px;
  }

  * {
    padding: 0px;
    margin: 0px;
  }

  .top_div {
    background: #008ead;
    width: 100%;
    height: 400px;
  }

  .ipt {
    border: 1px solid #d3d3d3;
    padding: 10px 10px;
    width: 290px;
    border-radius: 4px;
    padding-left: 35px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s
  }

  .ipt:focus {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6)
  }

  .u_logo {
    background: url("../../assets/img/username.png") no-repeat;
    padding: 10px 10px;
    position: absolute;
    top: 43px;
    left: 40px;

  }

  .p_logo {
    background: url("../../assets/img/password.png") no-repeat;
    padding: 10px 10px;
    position: absolute;
    top: 12px;
    left: 40px;
  }

  a {
    text-decoration: none;
  }

  .tou {
    background: url("../../assets/img/tou.png") no-repeat;
    width: 97px;
    height: 92px;
    position: absolute;
    top: -87px;
    left: 140px;
  }

  .left_hand {
    background: url("../../assets/img/left_hand.png") no-repeat;
    width: 32px;
    height: 37px;
    position: absolute;
    top: -38px;
    left: 150px;
  }

  .right_hand {
    background: url("../../assets/img/right_hand.png") no-repeat;
    width: 32px;
    height: 37px;
    position: absolute;
    top: -38px;
    right: -64px;
  }

  .initial_left_hand {
    background: url("../../assets/img/hand.png") no-repeat;
    width: 30px;
    height: 20px;
    position: absolute;
    top: -12px;
    left: 100px;
  }

  .initial_right_hand {
    background: url("../../assets/img/hand.png") no-repeat;
    width: 30px;
    height: 20px;
    position: absolute;
    top: -12px;
    right: -112px;
  }

  .left_handing {
    background: url("../../assets/img/left-handing.png") no-repeat;
    width: 30px;
    height: 20px;
    position: absolute;
    top: -24px;
    left: 139px;
  }

  .right_handinging {
    background: url("../../assets/img/right_handing.png") no-repeat;
    width: 30px;
    height: 20px;
    position: absolute;
    top: -21px;
    left: 210px;
  }

  #loginBtn {
    margin-right: 30px;
    background: rgb(0, 142, 173);
    padding: 7px 10px;
    border-radius: 4px;
    border: 1px solid rgb(26, 117, 152);
    border-image: none;
    color: rgb(255, 255, 255);
    font-weight: bold;
    cursor: pointer;
  }
</style>
