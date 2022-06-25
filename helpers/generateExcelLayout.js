const generateExcelLayout = (data, except) => {
  const handleColumn = () => {
    return Object.keys(data[0]).filter((val) => !except.includes(val));
  };
  const columns = handleColumn().map((item) => ({
    title: item,
    width: { wch: 25 },
    style: {
      fill: { patternType: 'solid', fgColor: { rgb: '1C2560' } },
      font: {
        sz: '14',
        bold: true,
        color: { rgb: 'E8E9EF' },
      },
    },
  }));
  const datas = data
    .map((item) =>
      Object.keys(item)
        .filter((key) => !except.includes(key))
        .reduce((obj, key) => {
          return {
            ...obj,
            [key]: item[key],
          };
        }, {})
    )
    .map((item) =>
      Object.keys(item).map((a) => ({
        value: item[a],
      }))
    );

  return [
    {
      columns,
      data: datas,
    },
  ];
};

export default generateExcelLayout;
