type methodType = "post" | "get";
type postOptionType = {
  method: methodType;
  headers: {
    "content-type": "application/json";
  };
};

export class ReviewAPI {
  baseURL: string;
  postOption: postOptionType;
  getOption: { method: methodType };

  constructor(baseUrl: string) {
    this.baseURL = baseUrl;
    this.postOption = {
      method: "post",
      headers: {
        "content-type": "application/json",
        // "content-type":"multipart/fomr-data"
      },
    };
    this.getOption = {
      method: "get",
    };
  }
  async read(target: string) {
    const response = await fetch(
      this.baseURL + "/get?target=" + target,
      this.getOption
    );
    return await response.json();
  }
  async create(
    target: string,
    writer: string,
    comments: string,
    score: number,
    files?: File[]
  ) {
    const response = await fetch(this.baseURL + "/post", {
      ...this.postOption,
      body: JSON.stringify({
        target: target,
        writer: writer,
        comments: comments,
        score: score,
      }),
    });
    return await response.json();
  }
}
