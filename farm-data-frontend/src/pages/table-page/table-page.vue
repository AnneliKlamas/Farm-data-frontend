<template>
  <div class="m-4">
    <div class="d-flex d-inline mx-5">
      <h1 class="mr-auto">{{$t('tablePage.title')}}</h1>
      <b-button class="mb-3 btn" variant="outline-success" @click="showModal">{{$t('uploadPage.uploadFile')}}</b-button>
    </div>
    <b-modal hide-footer v-model="uploadModal" :title="$t('uploadPage.uploadHere')">
      <FileUpload @hide-modal="hideModal"/>
    </b-modal>
    <Container>
      <Table />
    </Container>
  </div>
</template>

<script>
import Table from "./table"
import Container from "../ui/container"
import FileUpload from "../ui/file-upload";
export default {
  name: "TablePage",
  components: {FileUpload, Table, Container},
  data() {
    return {
      uploadModal: false,
    }
  },
  methods: {
    showModal() {
      this.uploadModal = true
    },

    hideModal() {
      this.uploadModal = false
    }
  }
}
</script>
