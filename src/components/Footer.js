import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-item">
            <div className="logo-footer">
              <a href="https://fitforce.com/">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjY3IiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMjY3IDMyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYuOTU1NDYgOC41ODcxOUMxMS4xODc0IDEwLjkwNDEgMTQuMjE3OSAxNC40MTEgMTYuMTkzNCAxOC4wMDg2TDE2LjE5MzUgMTguMDA4NVYxOC4wMDg2QzE4LjE2OTIgMTQuNDExIDIxLjE5OTUgMTAuOTA0MiAyNS40MzE0IDguNTg3MTlDMjUuODYyNyA5LjExNTc2IDI2LjI0OTMgOS42ODE5NSAyNi41ODU1IDEwLjI4MDJDMTkuODIzNiAxMy44OTU4IDE3LjA1NTkgMTkuMjk1NCAxNi4xOTM1IDI2LjU4OTlDMTUuMzMxIDE5LjI5NTUgMTIuNTYzNCAxMy44OTU4IDUuODAxMzkgMTAuMjgwMkM2LjEzNzYyIDkuNjgyMDggNi41MjQyMiA5LjExNTg5IDYuOTU1NDYgOC41ODcxOVpNMTYuMTkzNSAxNS4wNTYxTDE2LjE5MzQgMTUuMDU1OUwxNi4xOTM1IDE1LjA1NThWMTUuMDU1OVYxNS4wNTYxWk0xNi4xOTM1IDExLjQxM0MxNC41ODYgOS4zMTg1MSAxMi41NzIzIDcuMzg4NDkgMTAuMTE0OSA1Ljg2NTY2QzkuNDczODYgNi4yNDYxNCA4Ljg3MTkgNi42ODQ5NyA4LjMxNTkyIDcuMTc0NzJDMTEuMDg2OSA4LjczNTMxIDEzLjI4NTIgMTAuODYyNyAxNC45NjA0IDEzLjE3MjJWMTMuMTcyM0wxNC45NjE3IDEzLjE3MzhDMTUuMzg3NSAxMy43NjEgMTUuNzc5NSAxNC4zNTk2IDE2LjEzODQgMTQuOTYzN0MxNi4xNTEyIDE0Ljk4NSAxNi4xOTEyIDE1LjA1NSAxNi4xOTM1IDE1LjA1NjVDMTYuMTk1NyAxNS4wNTUgMTYuMjM1NyAxNC45ODUgMTYuMjQ4NCAxNC45NjM3QzE2LjYwNzQgMTQuMzU5NiAxNi45OTkzIDEzLjc2MSAxNy40MjUxIDEzLjE3MzhMMTcuNDI2NCAxMy4xNzIzVjEzLjE3MjJDMTkuMTAxNyAxMC44NjI3IDIxLjMgOC43MzUzMSAyNC4wNzEgNy4xNzQ3MkMyMy41MTUgNi42ODQ5NyAyMi45MTMxIDYuMjQ2MTQgMjIuMjcxOSA1Ljg2NTY2QzE5LjgxNDUgNy4zODg0OSAxNy44MDA4IDkuMzE4NTEgMTYuMTkzNSAxMS40MTNaTTE1Ljk1NzMgMi41NzA2MkMyMy4zODc5IDIuNTcwNjIgMjkuNDExNSA4LjU3OTY5IDI5LjQxMTUgMTUuOTkyMkMyOS40MTE1IDIzLjQwNDcgMjMuMzg3OSAyOS40MTM3IDE1Ljk1NzMgMjkuNDEzN0M4LjUyNjY5IDI5LjQxMzcgMi41MDI5MyAyMy40MDQ1IDIuNTAyOTMgMTUuOTkyMkMyLjUwMjkzIDguNTc5ODIgOC41MjY2OSAyLjU3MDYyIDE1Ljk1NzMgMi41NzA2MlpNMjYuMzc2MyA1LjY4Nzk3QzIzLjczMDggMy4wNDg5OCAyMC4wNzYxIDEuNDE2NjEgMTYuMDM5MSAxLjQxNjYxQzEyLjAwMjEgMS40MTY2MSA4LjM0NzAzIDMuMDQ4OTggNS43MDE4NSA1LjY4Nzk3QzMuMDU2NDEgOC4zMjY4MyAxLjQxOTkyIDExLjk3MjggMS40MTk5MiAxNkMxLjQxOTkyIDIwLjAyNyAzLjA1NjQxIDIzLjY3MzIgNS43MDE4NSAyNi4zMTJDOC4zNDcxNiAyOC45NTEgMTIuMDAyMSAzMC41ODM0IDE2LjAzOTEgMzAuNTgzNEMyMC4wNzYxIDMwLjU4MzQgMjMuNzMxIDI4Ljk1MSAyNi4zNzYzIDI2LjMxMkMyOS4wMjE2IDIzLjY3MyAzMC42NTgxIDIwLjAyNyAzMC42NTgxIDE2QzMwLjY1ODEgMTEuOTcyOCAyOS4wMjE2IDguMzI2ODMgMjYuMzc2MyA1LjY4Nzk3Wk0xNS45OTk5IDBDMjAuNDE3OCAwIDI0LjQxODMgMS43OTExIDI3LjMxMzYgNC42ODY0QzMwLjIwODkgNy41ODE3IDMyIDExLjU4MjEgMzIgMTZDMzIgMjAuNDE4MyAzMC4yMDg5IDI0LjQxODMgMjcuMzEzNiAyNy4zMTM3QzI0LjQxODQgMzAuMjA4OSAyMC40MTc5IDMyIDE1Ljk5OTkgMzJDMTEuNTgxNyAzMiA3LjU4MTYgMzAuMjA4OSA0LjY4NjI5IDI3LjMxMzdDMS43OTA5OCAyNC40MTgzIDAgMjAuNDE4MyAwIDE2QzAgMTEuNTgyMSAxLjc5MTExIDcuNTgxNyA0LjY4NjQyIDQuNjg2NEM3LjU4MTYgMS43OTExIDExLjU4MTcgMCAxNS45OTk5IDBaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUyIDEwLjQzMjhINTkuNTYyNlYxMy41MTg5SDU0Ljg2OTZWMTYuNTM3Mkg1OS41NjI2VjE5LjU3ODFINTQuODY5NlYyNy4wNjE2SDUyVjEwLjQzMjhaTTY3LjgxMDMgMTAuNDMyOEg3MC42OTAzVjI3LjA2MTZINjcuODEwM1YxMC40MzI4Wk03OC4zMjY4IDEwLjQzMjhIODYuNzQ5MlYxMy41NTI4SDgzLjk3MjhWMjcuMDYxNkg4MS4wMzA3VjEzLjU1MjhINzguMzI2OFYxMC40MzI4Wk05NC43Mjc2IDEwLjQzMjhIMTAyLjM2M1YxMi4wNzE5SDk2LjI0MDFWMTcuMjcySDEwMi4zNjNWMTguOTExMUg5Ni4yNDAxVjI3LjA2MTZIOTQuNzI3NlYxMC40MzI4Wk0xMTguMTUyIDEwLjAxNDhDMTIwLjQ1OSAxMC4wMTQ4IDEyMi4zODkgMTAuODU1MSAxMjMuOTQzIDEyLjUzNTZDMTI1LjQ5NyAxNC4yMTYyIDEyNi4yNzQgMTYuMjg0OSAxMjYuMjc0IDE4Ljc0MThDMTI2LjI3NCAyMS4xNzYgMTI1LjQ5OSAyMy4yNDA5IDEyMy45NDkgMjQuOTM2NkMxMjIuMzk4IDI2LjYzMjIgMTIwLjUwNyAyNy40ODAxIDExOC4yNzcgMjcuNDgwMUMxMTYuMDE4IDI3LjQ4MDEgMTE0LjExMiAyNi42MzYgMTEyLjU1OCAyNC45NDc5QzExMS4wMDQgMjMuMjU5NyAxMTAuMjI3IDIxLjIxNzQgMTEwLjIyNyAxOC44MjA5QzExMC4yMjcgMTcuMjIzMiAxMTAuNTgxIDE1Ljc0MjMgMTExLjI4OSAxNC4zNzgzQzExMS45OTcgMTMuMDE0MiAxMTIuOTYyIDExLjk0NTkgMTE0LjE4NSAxMS4xNzM1QzExNS40MDcgMTAuNDAxIDExNi43MyAxMC4wMTQ4IDExOC4xNTIgMTAuMDE0OFpNMTE4LjIyNSAxMS42NDI2QzExNy4wOTkgMTEuNjQyNiAxMTYuMDMyIDExLjk2MjkgMTE1LjAyNCAxMi42MDM1QzExNC4wMTUgMTMuMjQ0MSAxMTMuMjI4IDE0LjEwNyAxMTIuNjYyIDE1LjE5MjJDMTEyLjA5NSAxNi4yNzc0IDExMS44MTIgMTcuNDg3IDExMS44MTIgMTguODIwOUMxMTEuODEyIDIwLjc5NTQgMTEyLjQzOSAyMi40NjI4IDExMy42OTIgMjMuODIzMUMxMTQuOTQ2IDI1LjE4MzQgMTE2LjQ1NyAyNS44NjM1IDExOC4yMjUgMjUuODYzNUMxMTkuNDA2IDI1Ljg2MzUgMTIwLjQ5OSAyNS41NTA4IDEyMS41MDQgMjQuOTI1M0MxMjIuNTA5IDI0LjI5OTggMTIzLjI5MiAyMy40NDQ0IDEyMy44NTUgMjIuMzU5MkMxMjQuNDE4IDIxLjI3MzkgMTI0LjcgMjAuMDY4MiAxMjQuNyAxOC43NDE4QzEyNC43IDE3LjQyMjkgMTI0LjQxOCAxNi4yMzAzIDEyMy44NTUgMTUuMTYzOUMxMjMuMjkyIDE0LjA5NzUgMTIyLjUgMTMuMjQ0MSAxMjEuNDc4IDEyLjYwMzVDMTIwLjQ1NiAxMS45NjI5IDExOS4zNzEgMTEuNjQyNiAxMTguMjI1IDExLjY0MjZaTTEzNS4yODkgMTAuNDMyOEgxMzguMzI0QzE0MC4wMTYgMTAuNDMyOCAxNDEuMTYzIDEwLjUwODIgMTQxLjc2MyAxMC42NTg5QzE0Mi42NjggMTAuODg1IDE0My40MDQgMTEuMzY5MiAxNDMuOTcgMTIuMTExNUMxNDQuNTM2IDEyLjg1MzggMTQ0LjgyIDEzLjc2NzYgMTQ0LjgyIDE0Ljg1MjhDMTQ0LjgyIDE1Ljc1NzIgMTQ0LjYyNCAxNi41NTIyIDE0NC4yMzQgMTcuMjM4QzE0My44NDQgMTcuOTIzOCAxNDMuMjg2IDE4LjQ0MiAxNDIuNTYxIDE4Ljc5MjRDMTQxLjgzNiAxOS4xNDI4IDE0MC44MzUgMTkuMzIxOCAxMzkuNTU3IDE5LjMyOTRMMTQ1LjAzNyAyNy4wNjE2SDE0My4xNTJMMTM3LjY4MiAxOS4zMjk0SDEzNi44MTJWMjcuMDYxNkgxMzUuMjg5VjEwLjQzMjhaTTEzNi44MTIgMTIuMDYwOVYxNy43MTNMMTM5LjQzMyAxNy43MzU3QzE0MC40NDggMTcuNzM1NyAxNDEuMTk5IDE3LjYzMDIgMTQxLjY4NiAxNy40MTkxQzE0Mi4xNzMgMTcuMjA4MSAxNDIuNTUzIDE2Ljg3MDkgMTQyLjgyNSAxNi40MDc0QzE0My4wOTggMTUuOTQzOSAxNDMuMjM1IDE1LjQyNTggMTQzLjIzNSAxNC44NTNDMTQzLjIzNSAxNC4yOTU0IDE0My4wOTYgMTMuNzg4NSAxNDIuODIgMTMuMzMyNkMxNDIuNTQ0IDEyLjg3NjcgMTQyLjE4MSAxMi41NTA3IDE0MS43MzIgMTIuMzU0OEMxNDEuMjgzIDEyLjE1ODggMTQwLjUzOCAxMi4wNjA5IDEzOS40OTUgMTIuMDYwOUgxMzYuODEyWk0xNjguMTUxIDEzLjUxOTFMMTY2Ljk0OSAxNC41MjUyQzE2Ni4yODYgMTMuNTgzMiAxNjUuNDkgMTIuODY5MSAxNjQuNTYxIDEyLjM4M0MxNjMuNjMyIDExLjg5NjkgMTYyLjYxMiAxMS42NTM5IDE2MS41IDExLjY1MzlDMTYwLjI4NSAxMS42NTM5IDE1OS4xNTkgMTEuOTcyMyAxNTguMTIzIDEyLjYwOTFDMTU3LjA4NyAxMy4yNDU5IDE1Ni4yODQgMTQuMTAxMyAxNTUuNzE0IDE1LjE3NTJDMTU1LjE0NCAxNi4yNDkxIDE1NC44NiAxNy40NTY4IDE1NC44NiAxOC43OTgzQzE1NC44NiAyMC44MjU1IDE1NS40OTcgMjIuNTE3NCAxNTYuNzcxIDIzLjg3NEMxNTguMDQ1IDI1LjIzMDUgMTU5LjY1MyAyNS45MDg3IDE2MS41OTMgMjUuOTA4N0MxNjMuNzI3IDI1LjkwODcgMTY1LjUxMyAyNC45OTY5IDE2Ni45NDkgMjMuMTczMUwxNjguMTUxIDI0LjE2NzlDMTY3LjM5MSAyNS4yMjMgMTY2LjQ0MyAyNi4wMzg3IDE2NS4zMDcgMjYuNjE1M0MxNjQuMTcxIDI3LjE5MTggMTYyLjkwMiAyNy40ODAxIDE2MS41IDI3LjQ4MDFDMTU4LjgzNCAyNy40ODAxIDE1Ni43MzEgMjYuNTExNyAxNTUuMTkxIDI0LjU3NDhDMTUzLjg5OSAyMi45Mzk1IDE1My4yNTQgMjAuOTY1IDE1My4yNTQgMTguNjUxM0MxNTMuMjU0IDE2LjIxNzEgMTU0LjAzNiAxNC4xNjkxIDE1NS42IDEyLjUwNzRDMTU3LjE2NSAxMC44NDU2IDE1OS4xMjQgMTAuMDE0OCAxNjEuNDc5IDEwLjAxNDhDMTYyLjkwMiAxMC4wMTQ4IDE2NC4xODcgMTAuMzIxOSAxNjUuMzMzIDEwLjkzNjFDMTY2LjQ4IDExLjU1MDMgMTY3LjQxOSAxMi40MTEzIDE2OC4xNTEgMTMuNTE5MVpNMTc3LjA5MyAxMC40MzI4SDE4NS44MjZWMTIuMDcxOUgxNzguNjE2VjE3LjI3MkgxODUuNzY0VjE4Ljg5OThIMTc4LjYxNlYyNS40MjI0SDE4NS43NjRWMjcuMDYxNkgxNzcuMDkzVjEwLjQzMjhaTTE5NS42OSAyNC41NzQ4QzE5Ni4wNDIgMjQuNTc0OCAxOTYuMzQzIDI0LjcxMDUgMTk2LjU5MSAyNC45ODE4QzE5Ni44NCAyNS4yNTMxIDE5Ni45NjQgMjUuNTg0NyAxOTYuOTY0IDI1Ljk3NjZDMTk2Ljk2NCAyNi4zNjA5IDE5Ni44NCAyNi42OTA2IDE5Ni41OTEgMjYuOTY1N0MxOTYuMzQzIDI3LjI0MDggMTk2LjA0MiAyNy4zNzgzIDE5NS42OSAyNy4zNzgzQzE5NS4zMzggMjcuMzc4MyAxOTUuMDM3IDI3LjI0MDggMTk0Ljc4OSAyNi45NjU3QzE5NC41NCAyNi42OTA2IDE5NC40MTYgMjYuMzYwOSAxOTQuNDE2IDI1Ljk3NjZDMTk0LjQxNiAyNS41ODQ3IDE5NC41NCAyNS4yNTMxIDE5NC43ODkgMjQuOTgxOEMxOTUuMDM3IDI0LjcxMDUgMTk1LjMzOCAyNC41NzQ4IDE5NS42OSAyNC41NzQ4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMjAuMzEgMTMuNTE5MUwyMTkuMTA4IDE0LjUyNTJDMjE4LjQ0NSAxMy41ODMyIDIxNy42NDkgMTIuODY5MSAyMTYuNzIgMTIuMzgzQzIxNS43OTEgMTEuODk2OSAyMTQuNzcxIDExLjY1MzkgMjEzLjY1OSAxMS42NTM5QzIxMi40NDMgMTEuNjUzOSAyMTEuMzE4IDExLjk3MjMgMjEwLjI4MiAxMi42MDkxQzIwOS4yNDYgMTMuMjQ1OSAyMDguNDQzIDE0LjEwMTMgMjA3Ljg3MyAxNS4xNzUyQzIwNy4zMDMgMTYuMjQ5MSAyMDcuMDE4IDE3LjQ1NjggMjA3LjAxOCAxOC43OTgzQzIwNy4wMTggMjAuODI1NSAyMDcuNjU1IDIyLjUxNzQgMjA4LjkzIDIzLjg3NEMyMTAuMjA0IDI1LjIzMDUgMjExLjgxMSAyNS45MDg3IDIxMy43NTIgMjUuOTA4N0MyMTUuODg2IDI1LjkwODcgMjE3LjY3MiAyNC45OTY5IDIxOS4xMDggMjMuMTczMUwyMjAuMzEgMjQuMTY3OUMyMTkuNTUgMjUuMjIzIDIxOC42MDIgMjYuMDM4NyAyMTcuNDY2IDI2LjYxNTNDMjE2LjMzIDI3LjE5MTggMjE1LjA2MSAyNy40ODAxIDIxMy42NTkgMjcuNDgwMUMyMTAuOTkzIDI3LjQ4MDEgMjA4Ljg5IDI2LjUxMTcgMjA3LjM1IDI0LjU3NDhDMjA2LjA1OCAyMi45Mzk1IDIwNS40MTMgMjAuOTY1IDIwNS40MTMgMTguNjUxM0MyMDUuNDEzIDE2LjIxNzEgMjA2LjE5NSAxNC4xNjkxIDIwNy43NTkgMTIuNTA3NEMyMDkuMzIzIDEwLjg0NTYgMjExLjI4MyAxMC4wMTQ4IDIxMy42MzggMTAuMDE0OEMyMTUuMDYxIDEwLjAxNDggMjE2LjM0NiAxMC4zMjE5IDIxNy40OTIgMTAuOTM2MUMyMTguNjM4IDExLjU1MDMgMjE5LjU3OCAxMi40MTEzIDIyMC4zMSAxMy41MTkxWk0yMzQuNTQ1IDEwLjAxNDhDMjM2Ljg1MiAxMC4wMTQ4IDIzOC43ODIgMTAuODU1MSAyNDAuMzM2IDEyLjUzNTZDMjQxLjg5IDE0LjIxNjIgMjQyLjY2NyAxNi4yODQ5IDI0Mi42NjcgMTguNzQxOEMyNDIuNjY3IDIxLjE3NiAyNDEuODkyIDIzLjI0MDkgMjQwLjM0MSAyNC45MzY2QzIzOC43OTEgMjYuNjMyMiAyMzYuOSAyNy40ODAxIDIzNC42NjkgMjcuNDgwMUMyMzIuNDExIDI3LjQ4MDEgMjMwLjUwNSAyNi42MzYgMjI4Ljk1MSAyNC45NDc5QzIyNy4zOTcgMjMuMjU5NyAyMjYuNjIgMjEuMjE3NCAyMjYuNjIgMTguODIwOUMyMjYuNjIgMTcuMjIzMiAyMjYuOTc0IDE1Ljc0MjMgMjI3LjY4MiAxNC4zNzgzQzIyOC4zOSAxMy4wMTQyIDIyOS4zNTUgMTEuOTQ1OSAyMzAuNTc3IDExLjE3MzVDMjMxLjggMTAuNDAxIDIzMy4xMjIgMTAuMDE0OCAyMzQuNTQ1IDEwLjAxNDhaTTIzNC42MTggMTEuNjQyNkMyMzMuNDkyIDExLjY0MjYgMjMyLjQyNSAxMS45NjI5IDIzMS40MTYgMTIuNjAzNUMyMzAuNDA4IDEzLjI0NDEgMjI5LjYyMSAxNC4xMDcgMjI5LjA1NCAxNS4xOTIyQzIyOC40ODggMTYuMjc3NCAyMjguMjA1IDE3LjQ4NyAyMjguMjA1IDE4LjgyMDlDMjI4LjIwNSAyMC43OTU0IDIyOC44MzIgMjIuNDYyOCAyMzAuMDg1IDIzLjgyMzFDMjMxLjMzOSAyNS4xODM0IDIzMi44NDkgMjUuODYzNSAyMzQuNjE4IDI1Ljg2MzVDMjM1Ljc5OSAyNS44NjM1IDIzNi44OTEgMjUuNTUwOCAyMzcuODk2IDI0LjkyNTNDMjM4LjkwMSAyNC4yOTk4IDIzOS42ODUgMjMuNDQ0NCAyNDAuMjQ4IDIyLjM1OTJDMjQwLjgxMSAyMS4yNzM5IDI0MS4wOTIgMjAuMDY4MiAyNDEuMDkyIDE4Ljc0MThDMjQxLjA5MiAxNy40MjI5IDI0MC44MTEgMTYuMjMwMyAyNDAuMjQ4IDE1LjE2MzlDMjM5LjY4NSAxNC4wOTc1IDIzOC44OTMgMTMuMjQ0MSAyMzcuODcgMTIuNjAzNUMyMzYuODQ4IDExLjk2MjkgMjM1Ljc2NCAxMS42NDI2IDIzNC42MTggMTEuNjQyNlpNMjQ4Ljk0NiAyNy4wNjE2TDI1MS4xMTEgMTAuNDMyOEgyNTEuMzZMMjU3LjU1NSAyNC4wNzcyTDI2My42ODggMTAuNDMyOEgyNjMuOTM2TDI2Ni4xMjIgMjcuMDYxNkgyNjQuNjJMMjYzLjEyOCAxNS4xNjkzTDI1Ny43NDEgMjcuMDYxNkgyNTcuMzU4TDI1MS44OTggMTUuMDc4OUwyNTAuNDE3IDI3LjA2MTZIMjQ4Ljk0NloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
                  alt="logo"
                />
              </a>
            </div>
            <p className="footer-desc">
              FitForce.com is an online marketplace that connects fitness
              professionals with people seeking qualified trainers. Our mission
              is to become the leading platform enabling delivery of
              personalized wellness services.
            </p>
            <h3 className="footer__title">Download app</h3>
            <div className="downloadApp-group">
              <a
                href="https://itunes.apple.com/us/app/fitforce-com/id1419933665"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="data:image/png;base64,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"
                  alt="appstore"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.fitforce.client"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAABQCAMAAAD1LJoLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAHLUExURUdwTP///////////////////////////////////////////////////////2FyiNfc4QDwdoiVpsTK0pyntPX3+ADf/2t7j+vt8LC5wwDU/3WEl36Mnuvu8ADJ/wDD/wDY/wDW/wDS/wDH/wDF/wDQ/7rBywDa/wDc/6awvADO//AwS/45Rf/JAHSDl/QySr/4/wDh///FAAHi//c0SHWDl//NAJKereQoUHSEl/o2RwDM///RAOorT//UAKavvPw3RgDL/7/z///DAOHl6e0tTQDN/83T2gTqdbC4xP+/AAHH7+X98eHk6SryjP/YAAjjdc7T2gTve/+rCw/bdXeFpq/60//bAADZu/zww//y9Ok/UtkrUQPmigvZhhrT83SDlu+Vo99NW/3l6TOv2v7umvXLBf/XJWv3r5FukvVKWfZoc1yYuwDTz/ziWyC06CDqaP9KO/rVABjjegDfpvHSQP/qgNDLFtxfexHub/9CQHDqrbhJc1D1ovbK0Yj4v+hgdvybov3Axv/639/DD//537DTJYfvu5Kersg8ZNH4/9x0j4V7nPbI0vrL0KtWfGJyiN/EEOzIQP+SGfLI0qDtyJbW5e/9/+aer8KYO7wAAAAOdFJOUwA/r5/f3lD+X3/PEKDdO+MGBwAACVFJREFUeNrt3A1/08YZAHADg6btJl10EpKwBIUVFREwg5A6hiamYOKkJYUAjFFgUGBlLaztYGvZuq3dW1/3/v5xd/fci+5kSbYcJ3GJjh+Q2LIi/fXcc8+dFddq0LZs+5ZRNdKe27ajlrQtlYrStk8Il2crDK0982zlUiQzUUH0ytBEU+WXrDzzfBUw2SEzUdtaKWS1rVVPyulLtcoguy9VMBVMBTP2MCFyhnmZM+Tr1gXm3x9/fm6VKrFrmqYV0q+xCa1u+CZvCLax6gbSHzGMjkW/CzD9Gpmuw16PxwTm1g8vX7788WpoOq5pRdhvmBGcmI9J6xrL5F9y0hh7AsYh37SSR4zInIkQihrmEsCY8VjBfLXndSrzeHiasOWyc/E9ODGUPGVa8ksCA/8ljyAzgBhxbCqKTAteOTYwp1+kMhcuXHj8+ZD7tbVTGRymNeOJ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"
                  alt="googleplay"
                />
              </a>
            </div>
          </div>
          <div className="footer-item footer-item_menu">
            <div className="footer-menu">
              <a className="footer-menu__item" href="https://fitforce.com/">
                Home
              </a>
              <a
                className="footer-menu__item"
                href="https://fitforce.zendesk.com/"
              >
                Support
              </a>
              <a
                className="footer-menu__item"
                href="https://fitforce.com/magazine"
              >
                Magazine
              </a>
              <a
                className="footer-menu__item"
                href="https://fitforce.com/trainer"
              >
                For Trainers
              </a>
            </div>
            <h3 className="footer__title footer__title_social">Follow Us</h3>
            <div className="social">
              <a
                href="https://twitter.com/WeAreFitForce"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyNCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMyAyLjAwMDAxQzIyLjA0MjQgMi42NzU0OSAyMC45ODIxIDMuMTkyMTIgMTkuODYgMy41MzAwMUMxOC42MjY0IDIuMTExNTUgMTYuNjM4NCAxLjYxNDEyIDE0Ljg4MjEgMi4yODQ0NkMxMy4xMjU4IDIuOTU0OCAxMS45NzQ4IDQuNjUwMzEgMTIgNi41MzAwMVY3LjUzMDAxQzguNDMwNjYgNy42MjI1NiA1LjA1MjAzIDUuOTIxOTggMyAzLjAwMDAxQzMgMy4wMDAwMSAtMSAxMiA4IDE2QzUuOTQwNTMgMTcuMzk4IDMuNDg3MTYgMTguMDk4OSAxIDE4QzEwIDIzIDIxIDE4IDIxIDYuNTAwMDFDMjAuOTk5MSA2LjIyMTQ2IDIwLjk3MjMgNS45NDM2IDIwLjkyIDUuNjcwMDFDMjEuOTQwNiA0LjY2MzUgMjIuNjYwOCAzLjM5MjcyIDIzIDIuMDAwMDFaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                  alt="twitter"
                />
              </a>
              <a
                href="https://www.facebook.com/WeAreFitForce/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAxMyAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAxSDlDNi4yMzg1OCAxIDQgMy4yMzg1OCA0IDZWOUgxVjEzSDRWMjFIOFYxM0gxMUwxMiA5SDhWNkM4IDUuNDQ3NzIgOC40NDc3MiA1IDkgNUgxMlYxWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                  alt="facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/wearefitforce/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yIDdDMiA0LjIzODU4IDQuMjM4NTggMiA3IDJIMTdDMTkuNzYxNCAyIDIyIDQuMjM4NTggMjIgN1YxN0MyMiAxOS43NjE0IDE5Ljc2MTQgMjIgMTcgMjJIN0M0LjIzODU4IDIyIDIgMTkuNzYxNCAyIDE3VjdaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjAwMDEgMTEuMzdDMTYuMjUzMiAxMy4wNzcgMTUuMzgzMSAxNC43NTM4IDEzLjg0MTcgMTUuNTI5N0MxMi4zMDAzIDE2LjMwNTUgMTAuNDM1MSAxNi4wMDU0IDkuMjE0OSAxNC43ODUyQzcuOTk0NjkgMTMuNTY0OSA3LjY5NDU1IDExLjY5OTggOC40NzAzOCAxMC4xNTg0QzkuMjQ2MjEgOC42MTY5NyAxMC45MjMxIDcuNzQ2ODcgMTIuNjMwMSA3Ljk5OTk5QzE0LjM3MyA4LjI1ODQ2IDE1Ljc0MTYgOS42MjcwMiAxNi4wMDAxIDExLjM3WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                  alt="instagramm"
                />
              </a>
            </div>
          </div>
          <div className="footer-item">
            <h3 className="footer__title footer__title_form">
              FitForce is growing.
            </h3>
            <p className="footer-form-desc">
              Stay up to date with the latest news on what's coming soon.
            </p>
            <form
              action="https://fitforce.com/"
              method="post"
              className="form-footer"
            >
              <input type="text" name="name" required="" placeholder="Name" />
              <input
                type="email"
                name="email"
                required=""
                placeholder="Email"
              />
              <input type="submit" value="subscribe" />
            </form>
            <h3 className="footer__title footer__title_social-mobile">
              Follow Us
            </h3>
            <div className="social social_mobile">
              <a
                href="https://twitter.com/WeAreFitForce"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyNCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMyAyLjAwMDAxQzIyLjA0MjQgMi42NzU0OSAyMC45ODIxIDMuMTkyMTIgMTkuODYgMy41MzAwMUMxOC42MjY0IDIuMTExNTUgMTYuNjM4NCAxLjYxNDEyIDE0Ljg4MjEgMi4yODQ0NkMxMy4xMjU4IDIuOTU0OCAxMS45NzQ4IDQuNjUwMzEgMTIgNi41MzAwMVY3LjUzMDAxQzguNDMwNjYgNy42MjI1NiA1LjA1MjAzIDUuOTIxOTggMyAzLjAwMDAxQzMgMy4wMDAwMSAtMSAxMiA4IDE2QzUuOTQwNTMgMTcuMzk4IDMuNDg3MTYgMTguMDk4OSAxIDE4QzEwIDIzIDIxIDE4IDIxIDYuNTAwMDFDMjAuOTk5MSA2LjIyMTQ2IDIwLjk3MjMgNS45NDM2IDIwLjkyIDUuNjcwMDFDMjEuOTQwNiA0LjY2MzUgMjIuNjYwOCAzLjM5MjcyIDIzIDIuMDAwMDFaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                  alt="twitter"
                />
              </a>
              <a
                href="https://www.facebook.com/WeAreFitForce/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAxMyAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAxSDlDNi4yMzg1OCAxIDQgMy4yMzg1OCA0IDZWOUgxVjEzSDRWMjFIOFYxM0gxMUwxMiA5SDhWNkM4IDUuNDQ3NzIgOC40NDc3MiA1IDkgNUgxMlYxWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                  alt="facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/wearefitforce/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yIDdDMiA0LjIzODU4IDQuMjM4NTggMiA3IDJIMTdDMTkuNzYxNCAyIDIyIDQuMjM4NTggMjIgN1YxN0MyMiAxOS43NjE0IDE5Ljc2MTQgMjIgMTcgMjJIN0M0LjIzODU4IDIyIDIgMTkuNzYxNCAyIDE3VjdaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjAwMDEgMTEuMzdDMTYuMjUzMiAxMy4wNzcgMTUuMzgzMSAxNC43NTM4IDEzLjg0MTcgMTUuNTI5N0MxMi4zMDAzIDE2LjMwNTUgMTAuNDM1MSAxNi4wMDU0IDkuMjE0OSAxNC43ODUyQzcuOTk0NjkgMTMuNTY0OSA3LjY5NDU1IDExLjY5OTggOC40NzAzOCAxMC4xNTg0QzkuMjQ2MjEgOC42MTY5NyAxMC45MjMxIDcuNzQ2ODcgMTIuNjMwMSA3Ljk5OTk5QzE0LjM3MyA4LjI1ODQ2IDE1Ljc0MTYgOS42MjcwMiAxNi4wMDAxIDExLjM3WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                  alt="instagramm"
                />
              </a>
            </div>
          </div>
        </div>
        <p className="copyright">
          Copyright 2019 FitForce.com Inc. All Rights Reserved |
          San&nbsp;Francisco, California |
          <a href="https://fitforce.com/privacy-policy">Privacy Policy</a> |
          <a href="https://fitforce.com/terms-and-conditions">
            Terms and Conditions
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
