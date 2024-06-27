import axios from "axios";

export async function getProducts(setFunc, url1) {
  try {
    const { data } = await axios.get(url1);
    setFunc(data);
  } catch (err) {
    console.log(err);
  }
}
