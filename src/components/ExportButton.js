export const ExportButton = ({ keyword }) => {
  const handleExport = () => {
    const data = JSON.parse(localStorage.getItem(keyword) || "[]");

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `exported_data_${keyword}.json`;
    link.click();
  };

  return (
    <button className="btn" onClick={handleExport}>
      Export Data ({keyword})
    </button>
  );
};
