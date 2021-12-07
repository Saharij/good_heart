export const Form = () => {
  return (
    <>
      <h2>
        Заповніть форму
      </h2>
      <div className="toggler"></div>
      <form action="">
        <label htmlFor="">
          <span>Ім'я</span>
          <input type="text" />
        </label>
        <label htmlFor="">
          <span>Фамілія</span>
          <input type="text" />
        </label>
        <label htmlFor="">
          <span>Назва компанії, організації</span>
          <input type="text" />
        </label>
        <label htmlFor="">
          <span>Email-адрес</span>
          <input type="email" />
        </label>
        <label htmlFor="">
          <span>Номер телефону</span>
          <input type="tel" />
        </label>
        <label htmlFor="">
          <span>Країна</span>
          <input type="text" />
        </label>
        <label htmlFor="">
          <span>Місто</span>
          <input type="text" />
        </label>
        <label htmlFor="">
          <span>Штат, район</span>
          <input type="text" />
        </label>
        <label htmlFor="">
          <span>Адреса</span>
          <input type="text" />
        </label>
        <label htmlFor="">
          <span>Поштовий індекс</span>
          <input type="number" />
        </label>
      </form>
    </>
  );
};
