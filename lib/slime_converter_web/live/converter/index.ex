defmodule SlimeConverterWeb.ConverterLive.Index do
  @moduledoc """
  Convert slime templates to html
  """
  use SlimeConverterWeb, :live_view
  alias SlimeConverter.Indentifier

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, :converted_html, "")}
  end

  @impl true
  def handle_params(params, _url, socket) do
    {:noreply, apply_action(socket, socket.assigns.live_action, params)}
  end

  @impl true
  def handle_event("convert", %{"key" => _, "value" => source}, socket) do
    converted_html =
      source
      |> String.trim()
      |> Slime.Renderer.precompile()
      |> Indentifier.indentify()

    {:noreply, assign(socket, :converted_html, converted_html)}
  end

  def apply_action(socket, :index, _params) do
    socket
    |> assign(:page_title, "Slime Conversion Tool")
  end
end
