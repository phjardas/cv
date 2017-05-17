import { call, race, take, takeEvery } from 'redux-saga/effects';

export default function* promised(actions, handler) {
  function* resolvePromise({ payload, defer: { resolve, reject }}) {
    const [ winner ] = yield [
      race({
        success: take(actions.success),
        error: take(actions.error),
      }),
      call(handler, payload),
    ];

    if (winner.success) {
      resolve(winner.success.payload);
    } else {
      reject(winner.error.payload);
    }
  }

  yield takeEvery(actions.request, resolvePromise);
}
