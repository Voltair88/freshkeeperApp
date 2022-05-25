import { getDatabase, ref, onValue } from "firebase/database";

export default function getStorages() {
  const db = getDatabase();
  const storagesRef = ref(db, "storages");
  onValue(storagesRef, (snapshot) => {
    console.log("storages", snapshot.val());
  });
}
