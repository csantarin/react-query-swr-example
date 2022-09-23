import { CallEffect, all } from '@redux-saga/core/effects';

const runtimes: CallEffect<unknown>[] = [
];

export function* rootRuntime() {
  yield all(runtimes);
}
