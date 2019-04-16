class MonitorChannel < ApplicationCable::Channel
  def subscribed
    stream_from "monitor_1"
  end

  def receive(data)
    ActionCable.server.broadcast "monitor_1", data
  end
end
