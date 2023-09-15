import { getProductById } from "../api_services/productsService.js";
import chai from "chai"

const expect = chai.expect;

describe("getProductByIdTest", () => {

    it("should fetch a product from the database", async () => {
        const id = 5;

        const product = await getProductById(id);

        expect(product).to.have.property("id");
        expect(product.id).eq(id);

        expect(product).to.have.property("nombre");
        expect(product.nombre).to.be.a("string");

        expect(product).to.have.property("nombreLargo");
        expect(product).to.have.property("descripcion");
        expect(product).to.have.property("categoria");

        expect(product).to.have.property("precio");
        expect(product.precio).to.be.a("number");

        expect(product).to.have.property("tags");
        expect(product.tags).to.be.an("array");

    });

});
