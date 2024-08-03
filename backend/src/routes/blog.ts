import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import { blogInput, updateInput } from "@zaid1303/medium-common";
// Create the main Hono app
export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>();


blogRouter.use("/*", async (c, next) => {
    try {
        const authheader = c.req.header("authorization") || "";
        if (!authheader) {
            c.status(401);
            return c.json({ error: "unauthorized" });
        }

        const user = await verify(authheader, c.env.JWT_SECRET);
        if (!user) {
            c.status(401);
            return c.json({ error: "unauthorized" });
        }
        //@ts-ignore
        c.set("userId", user.id);
        await next();
    }
    catch (e) {
        c.status(403);
        return c.json({ e });
    }

})


blogRouter.get('/bulk', async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        const posts = await prisma.post.findMany({
            select:{
                content:true,
                title:true,
                id:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
        });
        return c.json({
            posts
        })
    }
    catch(e){
        return c.json({e });
    }
})





blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const reqid = c.req.param('id');
    try {
        const post = await prisma.post.findFirst({
            where: {
                id: reqid
            },
            select:{
                id:true,
                content:true,
                title:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
        });
        return c.json({
            post
        })
    }
    catch (e) {
        c.status(411);
        return c.json({ e });
    }
})





blogRouter.post('/', async (c) => {
    const userId = c.get('userId');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const { success } = blogInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}
    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: userId
        }
    });
    return c.json({
        id: post.id
    });
})



blogRouter.put('/', async (c) => {
    const userId = c.get('userId');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const { success } = updateInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}
    const post = await prisma.post.update({
        where: {
            id: body.id,
            authorId: userId
        },
        data: {
            title: body.title,
            content: body.content
        }
    });

    return c.json({
        id: post.id
    });

})

