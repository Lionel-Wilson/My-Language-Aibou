"use server";

export async function analyseExpression(prevState: any, formData: FormData) {
  const rawFormData = {
    phrase: formData.get("phrase"),
    tier: formData.get("tier"),
    targetLanguage: formData.get("targetLanguage"),
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
    };
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function defineWord(prevState: any, formData: FormData) {
  const rawFormData = {
    word: formData.get("word"),
    tier: formData.get("tier"),
    targetLanguage: "",
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
    //console.log(answer);
    return {
      wordAnswer: answer,
    };
  } catch (error) {
    console.error("Error:", error);
  }
}
