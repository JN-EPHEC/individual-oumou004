import {Router, Response} from "express";
 const router = Router();


const users = [
{ id: 1, name: "Alice" },
{ id: 2, name: "Bob" },
];

router.get("/", (req, res: Response) =>{
    res.json(users)
});

export default router;
