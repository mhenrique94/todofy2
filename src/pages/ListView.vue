<template>
  <div class="wrapperPage">
    <v-btn
      class="mx-2 btn-floating"
      fab
      dark
      color="pink"
      @click="
        editIsEnabled = true;
        listIsEnabled = false;
      "
    >
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>

    <div>
      <v-text-field
        v-show="!editIsEnabled"
        v-model="input"
        label="Buscar"
        height="40"
      ></v-text-field>
    </div>
    <formTask
      v-show="editIsEnabled"
      :key="componentKey"
      :task="task"
      :categories="categories"
      :editingTask="editingTask"
      @to-index="reload()"
      @salva-task="
        (task) => {
          postTasks(task);
        }
      "
      @atualiza-task="
        (mytask) => {
          updateTasks(mytask);
        }
      "
    />
    <div
      v-for="(tarefa, index) in inputSearch"
      :key="index"
      v-show="listIsEnabled"
    >
      <cardTask
        :tarefa="tarefa"
        :task="task"
        @deleta-task="
          (id) => {
            deleteTasks(id);
            getTasks();
          }
        "
        @edita-task="
          (receives) => {
            task = receives;
            editingTask = true;
            editIsEnabled = true;
            listIsEnabled = false;
            forceRenderer();
          }
        "
      />
    </div>
  </div>
</template>

<script>
import formTask from "../components/Form.vue";
import cardTask from "../components/Card.vue";
import TaskApi from "@/api/taskApi";
import ProjectsApi from "@/api/projectsApi";

export default {
  name: "ListView",

  components: {
    formTask,
    cardTask,
  },
  data() {
    return {
      editIsEnabled: false,
      listIsEnabled: true,
      editingTask: false,
      tasks: [],
      task: {
        id: null,
        title: null,
        date: null,
        project: null,
        status: null,
        userId: null,
      },
      projects: [],
      componentKey: {
        type: Number,
      },
      input: "",
    };
  },
  methods: {
    getTasks() {
      TaskApi.getTasks((respostaApi) => {
        this.tasks = respostaApi;
      });
    },
    getProjects() {
      ProjectsApi.getProjects((response) => {
        this.projects = response;
      });
    },
    postTasks(task) {
      TaskApi.postTasks(task);
      this.reload();
    },
    removeTasks(id) {
      TaskApi.removeTask(id);
      this.reload();
    },
    updateTasks(mytask) {
      TaskApi.updateTasks(mytask);
      this.reload();
    },
    editTasks() {
      TaskApi.editTasks((respostaApi) => {
        this.task = respostaApi;
      });
      this.reload();
    },
    forceRenderer() {
      this.componentKey += 1;
    },
    reload() {
      window.location.href = "/";
    },
  },
  created() {
    this.getTasks();
    this.getProjects();
  },
  computed: {
    inputSearch() {
      return this.tasks.filter((elem) =>
        elem.title.toLowerCase().includes(this.input.toLowerCase())
      );
    },
  },
};
</script>

<style>
.wrapperPage {
  max-width: 50vw;
  margin-left: 20%;
}

.btn-floating {
  position: fixed;
  left: 2%;
  top: 15%;
}
</style>
