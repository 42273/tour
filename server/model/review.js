const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    target: { type: Number, required: true }, //게시글(관광지아이디)
    writer: { type: String, required: true }, //작성자
    comments: { type: String, required: true }, //남긴 글
    score: { type: Number, default: 3 }, // 평점 (1~5)
    photos: { type: Array, default: [] }, //이미지경로
});

module.exports = mongoose.model("Review", reviewSchema);
