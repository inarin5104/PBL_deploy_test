const Correct = (UserText, RandomNumber) => {
	const Result = UserText == RandomNumber ? "認証しました" : "認証に失敗しました";
	return Result;
}