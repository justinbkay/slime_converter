defmodule SlimeConverterWeb.PageController do
  use SlimeConverterWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
