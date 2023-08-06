import app from "../src/worker";

describe("Test Worker", () => {
	it("It should return Hono!", async () => {
		const response = await app.request("/");
		expect(response.status).toEqual(200);
		expect(await response.text()).toEqual("Hono!");
	});
});
