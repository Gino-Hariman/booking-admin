const generateExcelLayout = (data, except) => {
  const handleColumn = () => {
    return Object.keys(data[0]).filter((val) => !except.includes(val));
  };
  const columns = handleColumn().map((item) => ({
    title: item,
    width: { wpx: 80 },
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
        }, [])
    )
    .map((item) =>
      Object.keys(item).map((a) => ({
        value: item[a],
        style: {
          fill: { patternType: 'solid', fgColor: { rgb: 'FF0000FF' } },
        },
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
