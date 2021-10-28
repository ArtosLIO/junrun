class OrderController < ApplicationController

  before_action :authenticate_user, only: [:index, :show, :create]

  def index
    if current_user.role == "admin"
      @orders = Order.all
    end
      @orders = Order.where(user_id: current_user.id)
    # @orders = Order.all
  end

  def show
    @order = Order.where(id: params[:id]).first
    if @order
      render 'order/show'
    else
      render_404
    end
  end

  # /order POST
  def create
    @item = Item.where(id: params[:item_id].to_i).first
    @order = Order.new(user_id: current_user.id)
    @order.amount = params[:quantity].to_i * @item.price
    @order.save
    if @order.errors.empty?
      if @order.id != nil
        @order_description = OrdersDescription.create(order_id: @order.id, item_id: @item.id,
                                                      quantity: params[:quantity].to_i)
      end
    else
      redirect_to item_index_path and return
    end
    redirect_to order_path(@order)
  end

  private

  def authenticate_user
    redirect_to new_user_session_path unless current_user != nil
  end

end
