"use server";

export async function analyseExpression(prevState: any, formData: FormData) {
  const rawFormData = {
    phrase: formData.get("phrase"),
    tier: formData.get("tier"),
    nativeLanguage: formData.get("nativeLanguage"),
  };

  // This request should be refetched on every request.
  // Similar to `getServerSideProps`.
  try {
    const response = await fetch(`${process.env.API_URL}/search/phrase`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawFormData),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    var answer = await response.json();
    //console.log("Answer:");
    //console.log(answer);
    return {
      expressionAnswer: answer,
      error: null,
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      expressionAnswer: null,
      error:
        "Failed to process your sentence. Please make sure you select the correct sentence language and try again.",
    };
  }
}

export async function defineWord(prevState: any, formData: FormData) {
  const rawFormData = {
    word: formData.get("word"),
    tier: formData.get("tier"),
    nativeLanguage: formData.get("nativeLanguage"),
  };

  // This request should be refetched on every request.
  // Similar to `getServerSideProps`.
  try {
    const response = await fetch(`${process.env.API_URL}/search/word`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawFormData),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    var answer = await response.json();
    //console.log("Answer:");
    //console.log(answer);0
    return {
      wordAnswer: answer,
      error: null,
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      wordAnswer: answer,
      error:
        "Failed to process your word. Please make sure you use the Dictionary to look up single words only",
    };
  }
}
