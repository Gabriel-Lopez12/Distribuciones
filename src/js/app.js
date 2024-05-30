function chart_bi(ctx, values) {
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: values.map(({}, index) => index),
      datasets: [
        {
          label: "Distribución binomial",
          data: values.map((item) => item),
        },
      ],
    },
  });
}
function chart_hip(ctx, values) {
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: values.map(({}, index) => index),
      datasets: [
        {
          label: "Distribución Hipergeométrica",
          data: values.map((item) => item),
        },
      ],
    },
  });
}
