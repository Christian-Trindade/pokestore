const monetaryFormatter = (value: number) => {
  let formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  let valueFormated = formatter.format(value);

  return valueFormated;
};

export default monetaryFormatter;
