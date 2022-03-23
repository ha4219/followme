import { API, getPayload, getToken } from "@src/API";
import { IMergeCourse, IReportCommentType } from "types/apiType";

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

export const getReportedComments = async ({ id }) => {
  try {
    const { data }: { data: IReportCommentType[] } = await API.post(
      `/board/reply/reported`,
      {
        id: id,
      }
    );
    return data;
  } catch (e) {
    console.log("get reported comment", e);
    return [];
  }
};

// editor

export const getEditorAllBoard = async ({}) => {
  try {
    const { data } = await API.get(`/main/editorsPick`, {});
    return data;
  } catch (e) {
    console.log("get editorspick comment", e);
    return { recommend: [], theme: [] };
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
    const { data } = await API.post(`/board/1/insert`, {
      id: id,
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

export const insertThemeComment = async ({ id, idx, content }) => {
  try {
    const { data } = await API.post(`/board/1/reply/insert/${idx}`, {
      id: id,
      content: content,
    });
    return data;
  } catch (e) {
    console.log("insert theme comment board", e);
  }
};

export const insertThemeChildComment = async ({
  id,
  idx,
  content,
  parentIdx,
}) => {
  try {
    const { data } = await API.post(`/board/1/reply/insert/${idx}`, {
      id: id,
      parent: parentIdx,
      content: content,
    });
    return data;
  } catch (e) {
    console.log("insert theme comment board", e);
  }
};

export const delThemeComment = async ({ id, idx }) => {
  try {
    const { data } = await API.post(`/board/1/reply/delete/${idx}`, {
      id: id,
    });
    return data;
  } catch (e) {
    console.log("del comment board", e);
  }
};

export const reportComment = async ({ idx, commentIdx, type }) => {
  try {
    const { data } = await API.post(`/board/${type}/reply/report/${idx}`, {
      // id: id,
      commentIdx: commentIdx,
    });
    return data;
  } catch (e) {
    console.log("report all type comment board", e);
  }
};

export const reportThemeCommentBoard = async ({ idx, commentIdx }) => {
  try {
    const { data } = await API.post(`/board/1/reply/report/${idx}`, {
      // id: id,
      commentIdx: commentIdx,
    });
    return data;
  } catch (e) {
    console.log("report theme comment board", e);
  }
};

export const reportRecommendCommentBoard = async ({ idx, commentIdx }) => {
  try {
    const { data } = await API.post(`/board/0/reply/report/${idx}`, {
      // id: id,
      commentIdx: commentIdx,
    });
    return data;
  } catch (e) {
    console.log("report recommend comment board", e);
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
    const { data } = await API.post(`/board/0/insert`, {
      id: id,
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

export const insertRecommentComment = async ({ id, idx, content }) => {
  try {
    const { data } = await API.post(`/board/0/reply/insert/${idx}`, {
      id: id,
      content: content,
    });
    return data;
  } catch (e) {
    console.log("insert recommend comment board", e);
  }
};

export const insertRecommendChildComment = async ({
  id,
  idx,
  content,
  parentIdx,
}) => {
  try {
    const { data } = await API.post(`/board/0/reply/insert/${idx}`, {
      id: id,
      parent: parentIdx,
      content: content,
    });
    return data;
  } catch (e) {
    console.log("insert theme comment board", e);
  }
};

// course

export const getCourseAllBoard = async ({ id }) => {
  try {
    if (id) {
      const { data } = await API.post(`/board/2/allPosts`, {
        id: id,
      });
      return data;
    } else {
      const { data } = await API.post(`/board/2/allPosts`, {});
      return data;
    }
  } catch (e) {
    console.log("get course all board", e);
    return [];
  }
};

export const getCourseDetailBoard = async ({ id, idx }) => {
  try {
    if (id) {
      const { data } = await API.post(`/board/2/detail/${idx}`, {
        id: id,
      });
      return data;
    } else {
      const { data } = await API.post(`/board/2/detail/${idx}`, {});
      return data;
    }
  } catch (e) {
    console.log("get course detail board", e);
  }
};

export const insertCourseBoard = async ({ id, title, content }) => {
  try {
    const { data } = await API.post(`/board/2/insert`, {
      id: id,
      title: title,
      content: content,
      type: 2,
    });
    return data;
  } catch (e) {
    console.log("insert course board", e);
  }
};

export const insertCourseComment = async ({ id, idx, content }) => {
  try {
    const { data } = await API.post(`/board/2/reply/insert/${idx}`, {
      id: id,
      content: content,
    });
    return data;
  } catch (e) {
    console.log("insert theme comment board", e);
  }
};

export const insertCourseChildComment = async ({
  id,
  idx,
  content,
  parentIdx,
}) => {
  try {
    const { data } = await API.post(`/board/2/reply/insert/${idx}`, {
      id: id,
      parent: parentIdx,
      content: content,
    });
    return data;
  } catch (e) {
    console.log("insert course child comment board", e);
  }
};

export const reportCourseCommentBoard = async ({ idx, commentIdx }) => {
  try {
    const { data } = await API.post(`/board/2/reply/report/${idx}`, {
      // id: id,
      commentIdx: commentIdx,
    });
    return data;
  } catch (e) {
    console.log("report course comment board", e);
  }
};

export const getCourseCommentsLength = async ({ idx }) => {
  try {
    const { data } = await API.get(`/board/2/reply/${idx}`);

    return data.length;
  } catch (e) {
    console.log("get course comments", e);
    return 0;
  }
};
