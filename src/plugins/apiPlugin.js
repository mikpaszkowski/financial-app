import { $dbApi } from "../api/databaseAPI";

export default function(store) {
  try {
    store.$dbApi = $dbApi;
  } catch (e) {
    console.error(e);
  }
}
