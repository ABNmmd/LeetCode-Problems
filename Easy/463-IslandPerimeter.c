int islandPerimeter(int **grid, int gridSize, int *gridColSize)
{
    int cnt = 0;
    int i, j;
    for (i = 0; i < gridSize; i++)
    {
        for (j = 0; j < *gridColSize; j++)
        {
            if (grid[i][j] == 1)
            {
                if (j == 0 || grid[i][j - 1] == 0)
                    cnt++;
                if (j == *gridColSize - 1 || grid[i][j + 1] == 0)
                    cnt++;
                if (i == 0 || grid[i - 1][j] == 0)
                    cnt++;
                if (i == gridSize - 1 || grid[i + 1][j] == 0)
                    cnt++;
            }
        }
    }
    return cnt;
}