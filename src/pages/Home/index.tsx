export function Home() {
  const agenda = [
    {
      dia: "Seg",
      descricao: "Obra Cláudio (09:00)",
      isToday: false,
    },
    {
      dia: "Ter",
      descricao: "Obra Beltrao (10:00)",
      isToday: false,
    },
    {
      dia: "Qua",
      descricao: "Obra Cleyton (11:00)",
      isToday: false,
    },
    {
      dia: "Qui",
      descricao: "Obra Eder (12:00)",
      isToday: false,
    },
    {
      dia: "Sex",
      descricao: "Obra Maurício (13:00)",
      isToday: true,
    },
  ];
  return (
    <div>
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>AGENDA DE VISITAS(RF11)</h2>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          {agenda.map((item) => {
            const isToday = item.isToday;

            return (
              <div
                key={item.dia}
                style={{
                  width: "150px",
                  borderRadius: "10px",
                  border: isToday ? "2px solid #dc2626" : "1px solid #e0e0e0",
                  height: "180px",
                  backgroundColor: isToday ? "#fef2f2" : "white",
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    padding: "10px",
                    justifyContent: "center",
                    display: "flex",
                    color: isToday ? "#dc2626" : "#18181b",
                  }}
                >
                  <h3 style={{ margin: 0, fontSize: "1rem" }}>
                    {item.dia}
                    {isToday && " · Hoje"}
                  </h3>
                </div>
                <div style={{ borderBottom: "1px solid #e0e0e0" }} />
                <div
                  style={{
                    padding: "10px",
                    backgroundColor: "#f0f0f0",
                    margin: "8px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    lineHeight: 1.4,
                    height: "50px",
                    color: "#3f3f46",
                  }}
                >
                  <span>{item.descricao}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
