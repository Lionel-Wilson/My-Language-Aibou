"use server";

export async function analyseExpression(prevState: any, formData: FormData) {
  const rawFormData = {
    sentence: formData.get("sentence"),
    nativeLanguage: formData.get("nativeLanguage"),
  };

  const response = await fetch(`${process.env.API_URL}/search/sentence`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawFormData),
    cache: "no-store",
  });

  if (!response.ok) {
    var body = await response.json();

    return {
      expressionAnswer: "",
      error: body.message,
    };
  }

  var answer = await response.json();

  return {
    expressionAnswer: answer,
    error: null,
  };
}

export async function defineWord(prevState: any, formData: FormData) {
  const rawFormData = {
    word: formData.get("word"),
    tier: formData.get("tier"),
    nativeLanguage: formData.get("nativeLanguage"),
  };

  const response = await fetch(`${process.env.API_URL}/search/word`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawFormData),
    cache: "no-store",
  });

  if (!response.ok) {
    var body = await response.json();

    return {
      wordAnswer: "",
      error: body.message,
    };
  }

  var answer = await response.json();

  return {
    wordAnswer: answer,
    error: null,
  };
}

export async function getSynonyms(prevState: any, formData: FormData) {
  const rawFormData = {
    word: formData.get("word"),
    nativeLanguage: "English",
    //nativeLanguage: formData.get("nativeLanguage"), TO-DO: Uncomment when figure out the correct prompt
  };

  const response = await fetch(`${process.env.API_URL}/search/synonyms`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawFormData),
    cache: "no-store",
  });

  if (!response.ok) {
    var body = await response.json();

    return {
      wordAnswer: "",
      error: body.message,
    };
  }

  var answer = await response.json();

  return {
    wordAnswer: answer,
    error: null,
  };
}
