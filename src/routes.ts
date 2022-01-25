import { Express, Request, Response } from 'express'
import requireUser from './middleware/requireUser';
import validateResource from './middleware/validateResource';
import { createUserSchema } from './schema/user.schema';
import { createUserHandler, getCurrentUser } from './controller/user.controller';
import { createSessionSchema } from './schema/session.schema';
import { createUserSessionHandler, getUserSessionHandler, deleteSessionHandler } from './controller/session.controller';
import { createProductSchema, deleteProductSchema, getProductSchema, updateProductSchema } from './schema/product.schema';
import { createProductHandler, deleteProductHandler, getProductHandler, updateProductHandler } from './controller/product.controller';

function routes(app: Express) {
    app.get("/",(req, res) => {
        return res.send("welcome");
    });

    /**
     * @openapi
     * /healthcheck:
     *  get:
     *    tag:
     *    - Healthcheck
     *    description: Responds if the app is up and running
     *    responses:
     *      200:
     *          description: App is up and running
     */
    app.get('/healthcheck', (req:Request ,res:Response) => {
        return res.sendStatus(200);
    })
    
    /**
     * @openapi
     * '/api/users':
     *  post:
     *     tags:
     *     - User
     *     summary: Register a user
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *              $ref: '#/components/schemas/CreateUserInput'
     *     responses:
     *      200:
     *        description: Success
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/CreateUserResponse'
     *      409:
     *        description: Conflict
     *      400:
     *        description: Bad request
     */
    app.post("/api/users", validateResource(createUserSchema), createUserHandler);

    app.get("/api/me", requireUser, getCurrentUser);

    app.post("/api/sessions", validateResource(createSessionSchema), createUserSessionHandler);

    app.get("/api/sessions", requireUser, getUserSessionHandler);

    app.delete("/api/sessions", requireUser, deleteSessionHandler);

    app.post(
        "/api/products", 
        [requireUser, validateResource(createProductSchema)], 
        createProductHandler
    );
    
    /**
   * @openapi
   * '/api/products/{productId}':
   *  get:
   *     tags:
   *     - Products
   *     summary: Get a single product by the productId
   *     parameters:
   *      - name: productId
   *        in: path
   *        description: The id of the product
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/Product'
   *       404:
   *         description: Product not found
   */
    app.put(
        "/api/products/:productId", 
        [requireUser, validateResource(updateProductSchema)], 
        updateProductHandler
    );

    app.get(
        "/api/products/:productId", 
        [validateResource(getProductSchema)], 
        getProductHandler
    );

    app.delete(
        "/api/products/:productId", 
        [requireUser, validateResource(deleteProductSchema)], 
        deleteProductHandler
    );
}

export default routes