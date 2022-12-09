const { Router } = require("express");
const Review = require("../model/review");

const router = Router();

router.use((req, resp, next) => {
    next();
});

router.get("/get", async (req, resp) => {
    try {
        const { target } = req.query;
        const found = await Review.find({ target: target }).lean();
        resp.status(200).json({ result: true, datas: found });
    } catch (e) {
        console.log(e.message);
        resp.status(500).json({ result: false });
    }
});

router.post("/post", async (req, resp) => {
    try {
        const photos = [];
        const document = { ...req.body, photos };
        const recv = await Review.create(document);
        resp.status(201).json({ result: true, datas: recv });
    } catch (e) {
        console.log(e.message);
        resp.status(500).json({ result: false });
    }
});

module.exports = router;
