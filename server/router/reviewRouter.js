const { Router } = require("express");
const Review = require("../model/review");

const router = Router();

router.use((req, resp, next) => {
    //to be continue;
    next();
});


//query 로 전달받은 id 에 해당하는 리뷰를 보내기
router.get("/get", async (req, resp) => {
    try {
        const { target } = req.query;
        const found = await Review.find({ target: target }).lean();
        resp.status(200).json({ result: true, datas: found });
    } catch (e) {
        console.log(e.message)
        resp.status(500).json({ result: false })
    }
});




//body 로 전달받은 데이터들을 문서화해서 저장하고 결과를 알려주는게 목적

//multer
router.post("/post", async (req, resp) => {

    console.log(req.body)
    try {
        const photos = [];
        const document = { ...req.body, photos };
        const recv = await Review.create(document);
        resp.status(201).json({ result: true, datas: recv });
    } catch (e) {
        console.log(e.message)
        resp.status(500).json({ result: false })
    }

})

module.exports =router;