class ItemController < ApplicationController

  before_action :check_if_admin, only: [:edit, :update, :new, :create, :destroy]
  before_action :find_item, only: [:show, :edit, :update, :destroy]

  # /item GET
  def index
    @items = Item.where(["name LIKE ?", "%#{params[:query]}%"])
  end

  # /item/1 GET
  def show
    if @item
      render 'show'
    else
      render 'item/s404', status: 404
    end
  end

  # /item/new GET
  def new
    @item = Item.new
  end

  # /item/1/edit GET
  def edit
  end

  # /item POST
  def create
    item_params = params[:item]
    @item = Item.create(name: item_params[:name],
                        price: item_params[:price],
                        description: item_params[:description])
    if @item.errors.empty?
      redirect_to item_path(@item)
    else
      render 'new'
    end
  end

  # /item/1 PUT
  def update
    item_params = params[:item]
    @item.update(name: item_params[:name],
                 price: item_params[:price],
                 description: item_params[:description])
    if @item.errors.empty?
      redirect_to item_path(@item)
    else
      render 'edit'
    end
  end

  # /item/1 DELETE
  def destroy
    if @order_description = OrdersDescription.where(item_id: params[:id])
      render 'item/index', status: 501
    else
      @item.destroy
    end
    # redirect_to action: "index"
  end

  private

    def find_item
      @item = Item.where(id: params[:id]).first
      render_404 unless @item
    end

end
