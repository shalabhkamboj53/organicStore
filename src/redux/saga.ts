import { call, put, all, fork } from 'redux-saga/effects';
import { setProducts } from './actions/productActions';

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

export default function* rootSaga() {
    yield all([
        fork(fetchProductsSaga),
    ]);
}
