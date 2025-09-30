

A* Search algorithm is one of the most efficient and widely used techniques for pathfinding and graph traversal. 
It is designed to find the shortest path between a starting point and a goal point in a graph or search space. 
The strength of A* comes from the fact that it combines the actual cost from the start node with an estimated 
cost (heuristic) to the goal node, making it both optimal and complete when an admissible heuristic is used.

The evaluation function is:
f(n) = g(n) + h(n)

- g(n): The exact cost of the path from the start node to the current node n.
- h(n): The heuristic estimate of the cost from node n to the goal node.
- f(n): The total estimated cost of the cheapest path through node n.

By always choosing the node with the lowest f(n), A* efficiently balances exploration and exploitation.

<h5>Algorithm for A* Search</h5>

<ol>
    <li>Initialization:</li>
    <ul>
        <li>Define two lists:
            <ul>
                <li><strong>OPEN list:</strong> A priority queue that stores nodes to be explored, sorted by their f(n) value.</li>
                <li><strong>CLOSED list:</strong> A list that stores nodes already explored.</li>
            </ul>
        </li>
        <li>Add the start node S to the OPEN list with g(S) = 0 and f(S) = h(S).</li>
    </ul>
    <li>Check OPEN List:</li>
    <ul>
        <li>If the OPEN list is empty, it means no path exists. The algorithm terminates with failure.</li>
    </ul>
    <li>Select Node:</li>
    <ul>
        <li>Remove the node n with the smallest f(n) from the OPEN list.</li>
        <li>Move this node to the CLOSED list, marking it as visited.</li>
        <li>If node n is the goal state, the algorithm succeeds and the path is reconstructed by backtracking.</li>
    </ul>
    <li>Expand Node:</li>
    <ul>
        <li>Generate all successor nodes (neighbors) of the selected node n.</li>
        <li>For each successor, calculate:
            <ul>
                <li>g(successor) = g(n) + cost(n, successor)</li>
                <li>h(successor) = heuristic(successor, goal)</li>
                <li>f(successor) = g(successor) + h(successor)</li>
            </ul>
        </li>
    </ul>
    <li>Goal Test:</li>
    <ul>
        <li>For each generated successor node:
            <ul>
                <li>If the successor is the goal node, return success and reconstruct the path from the start node to the goal node.</li>
                <li>If not, proceed to the next step.</li>
            </ul>
        </li>
    </ul>
    <li>Evaluation and Add to OPEN List:</li>
    <ul>
        <li>For each successor node:
            <ul>
                <li>If the successor is not in OPEN or CLOSED, add it to the OPEN list with its f(n) value.</li>
                <li>If it is already in OPEN with a higher f(n), update it with the new lower f(n) (path improvement).</li>
                <li>If it is in CLOSED but the new path is better, move it back to OPEN with the updated cost.</li>
            </ul>
        </li>
    </ul>
    <li>Repeat:</li>
    <ul>
        <li>Go back to Step 2 and continue the process until:
            <ul>
                <li>The goal is reached (success), or</li>
                <li>The OPEN list becomes empty (failure).</li>
            </ul>
        </li>
    </ul>
</ol>
<h5>Advantages:</h5>
<ul>
    <li>Always finds the optimal path if the heuristic is admissible.</li>
    <li>More efficient than uninformed search algorithms like Dijkstra’s.</li>
    <li>Balances exploration (g) and heuristic guidance (h).</li>
</ul>

<h5>Drawbacks:</h5>
<ul>
    <li>Memory-intensive: Requires storing many nodes in OPEN and CLOSED lists.</li>
    <li>Performance heavily depends on the quality of the heuristic function.</li>
    <li>May become slow for very large and complex graphs.</li>
</ul>

<h5>Applications:</h5>
<ul>
    <li>GPS navigation and route planning</li>
    <li>Robot motion planning</li>
    <li>Game AI for shortest path and movement</li>
    <li>Network routing problems</li>
</ul>
