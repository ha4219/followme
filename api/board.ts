import { API, getPayload, getToken } from "@src/API";

export const deleteBoard = async ({ url, id, idx }) => {
  const urlTo = url[0].toUpperCase() + url.slice(1);
  try {
    const { data } = await API.post(`${url}/delete${urlTo}Boards/${idx}`, {
      id: id,
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const reportComment = async ({ id }) => {
  try {
    const { data } = await API.post(`/reply/reported`, {
      id: id,
    });
  } catch (e) {
    console.log("get reported comment", e);
  }
};

// Theme

export const insertThemeBoard = async ({
  id,
  title,
  shortContent,
  content,
  mainImg,
  isLocal,
  schedule,
  region,
  season,
  tags,
}) => {
  try {
    const { data } = await API.post(`board/1/insert`, {
      writer: id,
      title: title,
      shortContent: shortContent,
      content: content,
      mainImg: mainImg,
      isLocal: isLocal,
      schedule: schedule,
      region: region,
      tags: tags,
      season: season,
      type: 1,
    });
    return data;
  } catch (e) {
    console.log("insert theme board", e);
  }
};

export const getThemeAllBoard = async ({ id }) => {
  try {
    if (id) {
      const { data } = await API.post(`/board/1/allPosts`, {
        id: id,
      });
      return data;
    } else {
      const { data } = await API.post(`/board/1/allPosts`, {});
      return data;
    }
  } catch (e) {
    console.log("get theme all board", e);
    return [];
  }
};

export const getThemeDetailBoard = async ({ id, idx }) => {
  try {
    if (id) {
      const { data } = await API.post(`/board/1/detail/${idx}`, {
        id: id,
      });
      return data;
    } else {
      const { data } = await API.post(`/board/1/detail/${idx}`, {});
      return data;
    }
  } catch (e) {
    console.log("get theme detail board", e);
  }
};

export const delThemeBoard = async ({ id, idx }) => {
  try {
    const { data } = await API.post(`/board/1/delete/${idx}`, {
      writer: id,
    });
    return data;
  } catch (e) {
    console.log("del theme board", e);
  }
};

export const likeThemeBoard = async ({ id, idx }) => {
  try {
    const { data } = await API.post(`/board/1/like/${idx}`, {
      id: id,
    });
    return data;
  } catch (e) {
    console.log("like theme board", e);
  }
};

export const insertThemeComment = async ({ id, idx, parent }) => {
  try {
    const { data } = await API.post(`/board/1/reply/insert/${idx}`, {
      id: id,
    });
    return data;
  } catch (e) {
    console.log("insert theme comment board", e);
  }
};

export const delThemeComment = async ({ id, idx }) => {
  try {
    const { data } = await API.post(`board/1/reply/delete/${idx}`, {
      id: id,
    });
    return data;
  } catch (e) {
    console.log("del comment board", e);
  }
};

export const reportThemeCommentBoard = async ({ id, idx }) => {
  try {
    const { data } = await API.post(`/board/1/reply/report/${idx}`, {
      id: id,
    });
    return data;
  } catch (e) {
    console.log("get theme comment board", e);
  }
};

export const getRecommendAllBoard = async ({ id }) => {
  try {
    if (id) {
      const { data } = await API.post(`/board/0/allPosts`, {
        id: id,
      });
      return data;
    } else {
      const { data } = await API.post(`/board/0/allPosts`, {});
      return data;
    }
  } catch (e) {
    console.log("get theme all board", e);
    return [];
  }
};

export const insertRecommendBoard = async ({
  id,
  title,
  shortContent,
  content,
  mainImg,
  isLocal,
  schedule,
  region,
  season,
  tags,
}) => {
  try {
    const { data } = await API.post(`board/0/insert`, {
      writer: id,
      title: title,
      shortContent: shortContent,
      content: content,
      mainImg: mainImg,
      isLocal: isLocal,
      schedule: schedule,
      region: region,
      tags: tags,
      season: season,
      type: 0,
    });
    return data;
  } catch (e) {
    console.log("insert recommend board", e);
  }
};

export const getRecommendDetailBoard = async ({ id, idx }) => {
  try {
    if (id) {
      const { data } = await API.post(`/board/0/detail/${idx}`, {
        id: id,
      });
      return data;
    } else {
      const { data } = await API.post(`/board/0/detail/${idx}`, {});
      return data;
    }
  } catch (e) {
    console.log("get theme detail board", e);
  }
};

export const delRecommendBoard = async ({ id, idx }) => {
  try {
    const { data } = await API.post(`/board/0/delete/${idx}`, {
      writer: id,
    });
    return data;
  } catch (e) {
    console.log("del recommend board", e);
  }
};

export const likeRecommendBoard = async ({ id, idx }) => {
  try {
    const { data } = await API.post(`/board/0/like/${idx}`, {
      id: id,
    });
    return data;
  } catch (e) {
    console.log("like recommend board", e);
  }
};
