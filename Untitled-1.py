import matplotlib.pyplot as plt
import networkx as nx


# Создание графа для визуализации дерева решений двоичного поиска
G = nx.DiGraph()

# Добавляем узлы (проверяемые числа на каждом шаге)
nodes = ['5', '8', '3', '9']
edges = [('5', '3'), ('5', '8'), ('8', '7'), ('8', '9')]

# Добавляем вершины и ребра
G.add_edges_from(edges)

# Отрисовка дерева решений
plt.figure(figsize=(10, 8))
pos = nx.spring_layout(G)  # Позиционирование узлов
nx.draw(G, pos, with_labels=True, node_size=700, node_color="lightblue", font_size=14, font_weight="bold", arrows=True)

plt.title("Дерево решений для двоичного поиска (поиск числа 8)")
plt.show()
