# Command Line Tools

secialport 的命令行工具，用于快速调试、查询串口的功能

## 配置命令行

```shell
npm install -g @serialport/list @serialport/repl @serialport/terminal
```

## serialport-list

用来查询串口，可以通过此获得设备的串口表

```shell
> serialport-list -h

Usage: list [options]

List available serial ports

Options:
  -V, --version        output the version number
  -f, --format <type>  Format the output as text, json, or jsonl. default: text (default: "text")
  -h, --help           output usage information

# 格式化串口信息输出的格式
> serialport-list -f json
```

## serialport-rpel

用于构建串口连接、建立通信，实现串口的快速调试

```shell
# 使用格式，注意该命令无帮助命令
# <port> 指的是串口名称
# 可以用 serialport-list 获得
serialport-repl <port>
```

```shell
> serialport-list -f json
[{"comName":"COM1","manufacturer":"(??????)","pnpId":"ACPI\\PNP0501\\1"}]

> serialport-repl COM1
# 命令行会默认注入已经连接的串口对象 port
port = SerialPort("COM1", { autoOpen: false })
# 和 SerialPort 这个获取全局串口的对象
globals { SerialPort, portName, port }
# 查询串口
> SerialPort.list()
# 开启串口
> port.open()
```

## serialport-terminal

用于建立和串口的持续的实时通讯

```shell
> serialport-terminal -h
Usage: terminal [options]

A basic terminal interface for communicating over a serial port. Pressing ctrl+c exits.

Options:
  -V, --version          output the version number
  -l --list              List available ports then exit
  # 串口
  -p, --port <port>      Path or Name of serial port
  # 指定波特率
  -b, --baud <baudrate>  Baud rate default: 9600 (default: 9600)
  --databits <databits>  Data bits default: 8 (default: 8)
  --parity <parity>      Parity default: none (default: "none")
  --stopbits <bits>      Stop bits default: 1 (default: 1)
  --echo --localecho     Print characters as you type them.
  -h, --help             output usage information
```
