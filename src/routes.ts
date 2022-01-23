import { Express, Request, Response } from 'express'
import requireUser from './middleware/requireUser';
import validateResource from './middleware/validateResource';
import { createUserSchema } from './schema/user.schema';
import { createUserHandler } from './controller/user.controller';
import { createSessionSchema } from './schema/session.schema';
import { createUserSessionHandler, getUserSessionHandler, deleteSessionHandler } from './controller/session.controller';
import { createProductSchema, deleteProductSchema, getProductSchema, updateProductSchema } from './schema/product.schema';
import { createProductHandler, deleteProductHandler, getProductHandler, updateProductHandler } from './controller/product.controller';

function routes(app: Express) {
    app.get("/",(req, res) => {
        return res.send("welcome");
    });

    app.get('/healthcheck', (req:Request ,res:Response) => {
        return res.sendStatus(200);
    })
    
    app.post("/api/users", validateResource(createUserSchema), createUserHandler);

    app.post("/api/sessions", validateResource(createSessionSchema), createUserSessionHandler);

    app.get("/api/sessions", requireUser, getUserSessionHandler);

    app.delete("/api/sessions", requireUser, deleteSessionHandler);

    app.post(
        "/api/products", 
        [requireUser, validateResource(createProductSchema)], 
        createProductHandler
    );

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