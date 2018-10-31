function merge (...all) {
    return all.reduce((o, i) => ({ ...o, ...i }), {});
}
export { merge }