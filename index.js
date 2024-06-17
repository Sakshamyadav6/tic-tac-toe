document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll(".cell");
  const resetButton = document.getElementById("resetButton");
  let currentPlayer = "X";
  let board = Array(9).fill(null);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkWinner() {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  function handleClick(event) {
    const index = event.target.getAttribute("data-index");

    if (board[index] || checkWinner()) {
      return;
    }

    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;
    const winner = checkWinner();

    if (winner) {
      alert(`${winner} wins!`);
    } else if (!board.includes(null)) {
      alert("It's a draw!");
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }

  function resetGame() {
    board.fill(null);
    cells.forEach((cell) => (cell.textContent = ""));
    currentPlayer = "X";
  }

  cells.forEach((cell) => cell.addEventListener("click", handleClick));
  resetButton.addEventListener("click", resetGame);
});
