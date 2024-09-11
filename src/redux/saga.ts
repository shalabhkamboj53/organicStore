import { call, put, all, fork, takeEvery } from 'redux-saga/effects';
import { setProducts, FETCH_PRODUCT } from './actions/productActions';

const fetchProducts = async () => {
    const response = await fetch('https://run.mocky.io/v3/f28c3a5d-2e16-4397-89c0-9ccde50a42e0');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
};

function* fetchProductsSaga() {
    try {
        yield put(setProducts(yield call(fetchProducts)));
    } catch (error) {
        console.error('Failed to fetch products', error);
    }
}

function* watchFetchProducts() {
    yield takeEvery(FETCH_PRODUCT, fetchProductsSaga);
}

// Root saga
export default function* rootSaga() {
    yield all([
        fork(watchFetchProducts),
    ]);
}