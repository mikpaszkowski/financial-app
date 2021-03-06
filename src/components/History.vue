<template>
  <div class="container-history">
    <TheLeftPanel />
    <table class="history-table left">
      <thead>
        <tr>
          <th>Date</th>
          <th class="description-head">Description</th>
          <th>Status</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in history" :key="row.id">
          <td>{{ row.date }}</td>
          <td class="row-description">{{ row.description }}</td>
          <td>status</td>
          <td>
            {{
              row.transaction == "deposit"
                ? `- ${row.amount} (${row.currency})`
                : `+ ${row.amount} (${row.currency})`
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import { history } from "../assets/history";
import TheLeftPanel from "./TheLeftPanel.vue";

export default {
  data() {
    return {
      history: history,
    };
  },
  components: {
    TheLeftPanel,
  },

  mounted() {
    this.$nextTick(function () {
      setTimeout(() => {
        let element = document.querySelector(".history-table");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    });
  },
};
</script>


<style lang="scss">
$font-color: rgb(68, 68, 68);
$font-size: 20px;
$main-font: "Rubik", sans-serif;
$modal-width: 700px;
$modal-height: 700px;
$input-border-color: #bdc3c7;
$input-font-color: #656565;
$save-button-color: #16a085;
$border-radius: 5px;
$flat-green: #2ecc71;
$flat-blue: #3498db;
$flat-red: #e74c3c;

.container-history {
  display: flex;
  padding: 0 100px;
  font-family: $main-font;
  font-size: $font-size;

  .history-table {
    width: 70%;
    text-align: center;
    border-collapse: separate;
    position: relative;
    margin-left: 30px;
    margin-right: auto;
    border-spacing: 0;
    border-radius: 5px;
    margin-bottom: 1rem;
    font-size: 1em;
  }

  table tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
  }

  table tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
  }

  table th:first-child {
    border-top-left-radius: 10px;
  }
  table th:last-child {
    border-top-right-radius: 10px;
  }

  td,
  th {
    padding: 1rem;
    color: $font-color;
  }

  th::first-letter {
    text-transform: uppercase;
  }

  table tr:hover {
    background: rgb(197, 197, 197);
    color: white;
    cursor: pointer;
  }
  .description-head,
  .row-description {
    text-align: left;
  }

  table tr {
    background-color: white;
    height: 80px;
  }

  td {
    font-size: 1em;
  }

  #transaction {
    text-transform: uppercase;
    font-size: 1em;
  }
}

@media screen and(max-width: 1306px) {
  .container-history {
    flex-direction: column;

    .history-table {
      width: 100%;
      margin: 20px 0 0 0;
    }
  }
}
</style>