import { takeEvery, put } from "@redux-saga/core/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./Constance";
import axios from "axios";

function* getProducts() {
  let data = yield axios.get("http://localhost:7001/product")
  console.log("DATA", data);
  yield put({ type: SET_PRODUCT_LIST, data: data });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;
