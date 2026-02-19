const request = require("supertest");
const app = require("./server"); // si exportas app desde server.js

describe("API Bores_Arch", () => {
  let token;

  test("Login exitoso y obtiene token JWT", async () => {
    const res = await request(app)
      .post("/api/login")
      .send({ username: "fdbortoni", password: "Fede2001" });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
    token = res.body.token;
  });

  test("Obtener proyectos seguros con token", async () => {
    const res = await request(app)
      .get("/api/projects-secure")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("projects");
  });

  test("Crear proyecto con datos válidos", async () => {
    const res = await request(app)
      .post("/api/projects")
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "Proyecto Test", description: "Prueba API" });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("projectId");
  });

  test("Crear proyecto con datos inválidos (sin nombre)", async () => {
    const res = await request(app)
      .post("/api/projects")
      .set("Authorization", `Bearer ${token}`)
      .send({ description: "Sin nombre" });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });
});
