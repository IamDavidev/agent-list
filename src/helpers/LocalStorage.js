const init = () => JSON.parse(localStorage.getItem('contacts')) || [];

export default init;
