<template>
  <div class="m-4">
    <div class="d-flex d-inline mx-5">
      <h1 class="mr-auto">{{$t('tablePage.title')}}</h1>
      <b-button class="mb-3 mr-3 btn" variant="outline-danger" @click="deleteAllData">{{$t('tablePage.deleteAll')}}</b-button>
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
import { createNamespacedHelpers } from "vuex";
import { DELETE_ALL_DATA } from "@/pages/table-page/store/action-types";
const { mapActions } = createNamespacedHelpers('table')

export default {
  name: "TablePage",
  components: {FileUpload, Table, Container},
  data() {
    return {
      uploadModal: false,
    }
  },
  methods: {
    ...mapActions({
      deleteAllData: DELETE_ALL_DATA,
    }),

    showModal() {
      this.uploadModal = true
    },

    hideModal() {
      this.uploadModal = false
    }
  }
}
</script>
