#!/bin/bash
echo "Iniciando mongodb..."
sudo deepin-terminal -e ./mongod.txt
echo "Iniciar RabbitMQ:"
sudo deepin-terminal -e ./rabbitmq-server.txt
echo "Iniciando api_cliente_react..."
deepin-terminal -e ./api_client_react.txt
echo "Iniciando auth_node..."
deepin-terminal -e ./auth_node.txt
echo "Iniciando cart_node..."
deepin-terminal -e ./cart_node.txt
echo "Iniciando catalog_python..."
 deepin-terminal -e ./catalog_python.txt
echo "Iniciando image_node..."
deepin-terminal -e ./image_node.txt
echo "Iniciando order_java..."
deepin-terminal -e ./order_java.txt
