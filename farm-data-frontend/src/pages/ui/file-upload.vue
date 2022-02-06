<template>
  <div>
    <b-form-file
        v-model="file"
        accept=".csv"
        :state="Boolean(file)"
        :placeholder="$t('uploadPage.chooseFile')"
        :drop-placeholder="$t('uploadPage.dropHere')"
    />
    <div v-if="file" class="my-3">
      {{$t('uploadPage.selectedFile', {file: file.name})}}</div>
    <b-btn v-if="file" variant="outline-success" @click="upload()">
      {{$t('uploadPage.uploadFile')}}
    </b-btn>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import {UPLOAD_FARM_DATA} from "../table-page/store/action-types";

const { mapActions } = createNamespacedHelpers('table')
export default {
  name: "FileUpload",

  data() {
    return {
      file: null,
    }
  },

  methods: {
    ...mapActions({
      uploadFile: UPLOAD_FARM_DATA,
    }),

    async upload() {
      await this.uploadFile(this.file)
      this.$emit('hide-modal')
    }
  }
}
</script>
